const ROUTE_CHANGE_EVENT_NAME = 'route-chagne'

export const initRouter = (onRoute) => {
  window.addEventListener(ROUTE_CHANGE_EVENT_NAME, (e) => {
    const { nextUrl } = e.detail

    if (nextUrl) {
      history.pushState(null, null, nextUrl)
      onRoute()
    }
  })
}

export const pushRouter = (nextUrl) => {
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT_NAME, {
    detail: {
      nextUrl
    }
  }))
}
