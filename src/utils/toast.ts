import type { ToastOptions } from 'react-hot-toast'
import toast from 'react-hot-toast'

export enum ToastType {
  SUCCESS = 1,
  ERROR,
  INFO
}

export const notify = ({ type, content, options }: { type: ToastType; content: string; options?: ToastOptions }) => {
  if (type === ToastType.SUCCESS) {
    toast.success(content, options)
  } else if (type === ToastType.ERROR) {
    toast.error(content, options)
  } else {
    toast(content, options)
  }
}
