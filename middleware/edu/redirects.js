export default function ({ route, redirect }) {
  if (route.fullPath === '/edu/wsu/cs/383-cloud') {
    return redirect('/edu/wsu/cs/383-cloud/overview')
  }
  if (route.fullPath === '/edu/wsu/cs/483-big-data-capstone') {
    return redirect('/edu/wsu/cs/483-big-data-capstone/overview')
  }
}
