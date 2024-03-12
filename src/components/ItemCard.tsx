import { NavLink } from 'react-router-dom';
import s from './style/styleCard.module.css'
import { GiNotebook } from "react-icons/gi";
export const CardItem = (props: PostsArray) => {

  // constants

  const item: PostsArray = props.props

  return (
    <>
      <div className={s.card}>
        <>
          <GiNotebook
            size={96}
            color='green' />
        </>
        <div className={s.cardItem}>

          <p>Номер поста: <span>{item.id}</span> </p>
          <p>{item.title} </p>
          <NavLink to={`/posts/${item.id}`}>

            <button className='card_btn'>Подробнее</button>
          </NavLink>
        </div>
      </div>

    </>
  )
}