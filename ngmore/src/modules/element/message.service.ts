import {Injectable} from '@angular/core';
import {ElMessageService} from 'element-angular';
import {ElNotificationService} from 'element-angular'

/**
 * iconClass,自定义图标样式
 * customClass,自定义提示框样式
 * offset,组件的偏移量
 * zIndex,提示框 z-index
 */
enum types { success = 1, info, waring, error};

@Injectable()
export class MessageService {
  constructor(private message: ElMessageService,
              private notify: ElNotificationService) {
  }

  setType(type: string): string {
    if (types[type]) return type;
    return 'success';
  }

  /**
   *Todo:显示可关闭的信息
   * @param {string} msg
   * @param {string} type:success,warning,info,error
   */
  showClose(msg: string, type: string = 'success', onClose?: Function, duration: number = 3000, options?: {}): void {
    this.message.setOptions({showClose: true});
    this.message.setOptions({duration});
    if (onClose) {
      this.message.setOptions({onClose});
    }
    if (options) {
      this.message.setOptions(options)
    }
    this.message[this.setType(type)](msg);
  }

  /**
   *Todo:显示不可闭的信息
   * @param {string} msg
   * @param {string} type:success,warning,info,error,show
   */
  show(msg: string, type: string = 'success', onClose?: Function, duration: number = 3000, options?: {}): void {
    this.message.setOptions({duration});
    if (onClose) {
      this.notify.setOptions({onClose});
    }
    if (options) {
      this.message.setOptions(options)
    }
    this.message[this.setType(type)](msg);
  }

  /**
   *Todo:通知不可闭的信息
   * @param {string} msg
   * @param {string} type:success,warning,info,error,show
   */
  notifyInfo(msg: string, type: string = 'success', onClose?: Function, duration: number = 3000, options?: {}): void {
    this.notify.setOptions({duration});
    if (onClose) {
      this.notify.setOptions({onClose});
    }
    if (options) {
      this.message.setOptions(options)
    }
    this.notify[this.setType(type)](msg);
  }
}
