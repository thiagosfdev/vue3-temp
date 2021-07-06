import bus from '../utils/bus'

const EVENT_NAME = 'modal:toggle'

export default function useModal () {
  function close (payload = {}) {
    bus.emit(EVENT_NAME, { status: false, ...payload })
  }

  function listen (fn) {
    bus.on(EVENT_NAME, fn)
  }

  function off (fn) {
    bus.on(EVENT_NAME, fn)
  }

  function open (payload = {}) {
    bus.emit(EVENT_NAME, { status: true, ...payload })
  }

  return {
    close,
    listen,
    off,
    open
  }
}
