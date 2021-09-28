export default function ({ route, app }) {
  if (route.meta) { // ensure meta exists to prevent errors
    const pageIndex = route.meta.length - 1

    if (route.meta.length !== 0 && route.meta[pageIndex].breadcrumbItems) {
      app.store.commit('breadcrumbs/set', route.meta[pageIndex].breadcrumbItems)
    }
    return // return to keep the previous breadcrumbs if the child page has no crumbs set
  }
  // If meta doesn't exist at all, present an error breadcrumb
  app.store.commit('breadcrumbs/set', [{ text: 'Breadcrumb Error', active: true }])
}
