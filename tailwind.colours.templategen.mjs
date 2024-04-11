// run this to get the template to paste into the custom code tab of https://www.realtimecolors.com -> export
const interval = 2.5;
const multiplier = 10;
const from = 2.5;
const to = 100;
const createObj = (name, key = name) => {
  let template = `  ${key === 'bg' ? 'background' : key}: colourMap({
`;
  for (let i = from; i < to; i += interval) {
    template += `    ${i * multiplier}: '\${${name}.hex.${Math.floor(i)}}',
`;
  }
  template += `    pure: '\${${name}.hex}'
  }),`;
  return template;
};
const template = `
export const colours = ((colourMap)=>({
  ${['text', 'bg', 'primary', 'secondary', 'accent'].map(v => createObj(v)).join('\n')}
}))((inp)=>{
  const light = '\${theme}' === 'light';
  const obj = {};
  for (const pair of Object.entries(inp)) {
    if (isNaN(Number(pair[0]))) {
      obj[pair[0]]=pair[1];
    } else if (!light) obj[(1000-Number(pair[0])).toString()] = pair[1];
    else obj[pair[0]] = pair[1]
  }
  return obj;
});
`;
console.log(template);
