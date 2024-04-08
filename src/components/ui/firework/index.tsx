import css from "./firework.module.scss"
export default function Firework() {
   return (
      <div className={css.pyro}>
         <div className={css.before}></div>
         <div className={css.after}></div>
      </div>
   )
}
