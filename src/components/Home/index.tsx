import style from './style.module.scss'

console.log(style)

const Home: React.FC = () => {
  return (
    <div className={style.home}>
      <h1>DongDong Party</h1>
    </div>
  )
}

export default Home
