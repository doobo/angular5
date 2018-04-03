import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap, switchMap, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Injectable()
export class FetchService {

  private _baseUrl = '/api';

  constructor(private http: HttpClient) {
  }


  get baseUrl(): string {
    return this._baseUrl;
  }

  set baseUrl(value: string) {
    this._baseUrl = value;
  }

  //代理测试，配置根路径下的proxy.conf.json文件
  getQqMusic(qq: string = '8446666'): any {
    let url = `/api/qqmusic/${qq}`;
    return this.http.get(url).toPromise()
      .then(result => {
        console.log(result, 29);
      }, err => {
        console.log(err, 31);
      });
  }

  //ToDo:获取非JSON格式的内容
  getText(url: string = '') {
    let link = '/api'+url;
    return this.http.get(link, {responseType: 'text'})
      .pipe(
        tap(
          data => console.log(url, data,40),
          error => console.log(url, error,41))
      ).subscribe(data => {
        console.log(data, 44);
      },msg=>{
        console.log(msg,46);
      });
  }

  getByUrl(url: string): Observable<any> {
    return this.http.get<any>(this._baseUrl + url)
      .pipe(
        tap(anyes => console.log(`fetched get`)),
        catchError(this.handleError('get', []))
      );
  }

  /** GET any by id. Will 404 if id not found */
  getById(id: number): Observable<any> {
    const url = `${this._baseUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched any id=${id}`)),
      catchError(this.handleError<any>(`get id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /**PUT:更新数据 */
  update(any: any): Observable<any> {
    return this.http.put(this._baseUrl, any, httpOptions).pipe(
      tap(_ => console.log(`updated any id=${any.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  /** POST: add a new any to the server */
  add(any: any): Observable<any> {
    return this.http.post<any>(this._baseUrl, any, httpOptions).pipe(
      tap((any: any) => console.log(`added any w/ id=${any.id}`)),
      catchError(this.handleError<any>('add'))
    );
  }

  /** DELETE: delete the any from the server */
  delete(any: any | number): Observable<any> {
    const id = typeof any === 'number' ? any : any.id;
    const url = `${this._baseUrl}/${id}`;

    return this.http.delete<any>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted any id=${id}`)),
      catchError(this.handleError<any>('delete'))
    );
  }

  /* GET anyes whose name contains search term */
  search(term: string): Observable<any> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<any[]>(`api/anyes/?name=${term}`).pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      tap(_ => console.log(`found anyes matching "${term}"`)),
      catchError(this.handleError<any[]>('search', [])),
      // 切换到新的请求
      //switchMap((term) => this.add(term))
    );
  }
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
