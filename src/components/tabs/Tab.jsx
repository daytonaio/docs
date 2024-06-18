import { log } from "node_modules/astro/dist/core/logger/core"

export const Tab = (props) => {
  console.log(props, '--------+++++++');

  return (
    <div className="tab">
      <button onClick={() => {console.log('_______')}}>{props.title}</button>

      <div>{props.children}</div>
    </div>
  )
}