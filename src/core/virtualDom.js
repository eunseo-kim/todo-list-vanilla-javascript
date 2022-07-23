/* virtualDom은 사용자 정의 JSX pragma 입니다. */

export default function virtualDom(type, props, ...children) {
  return { type, props, children: children.flat(1) };
}
