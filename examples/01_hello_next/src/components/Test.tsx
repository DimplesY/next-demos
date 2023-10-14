function sleep() {
  return new Promise((rs) => {
    setTimeout(() => {
      rs('1')
    }, 1000)
  })
}

export async function Test() {

  await sleep()

  return (
    <div>Test Component</div>
  )
}
