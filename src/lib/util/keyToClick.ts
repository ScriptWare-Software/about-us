export const keyToClick = (key:KeyboardEvent & {
  currentTarget: HTMLElement,
})=>{
  if (key.key === 'Enter')
    key.currentTarget.click()
}