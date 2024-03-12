import { GiNotebook } from 'react-icons/gi'
import s from '../components/style/ItemPage.module.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader'
const ItemPage = () => {

    //hooks
    const [Info, setInfo] = useState<Array<PostsArray>>([])
    const [Loading, setLoading] = useState<boolean>(true)

    // function

    const getPosts = async (el: number): Promise<void> => {
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            Info.push(data.find((e: { id: number }) => e.id == el))
            setLoading(false)
        } catch (error) {
            alert(`Возникла внутрення ошибка, попробуйте зайти на сайт позже `)
            console.log(`ошибка`);
        }

    }
    getPosts(Number(window.location.pathname.slice(7)));
    return (
        <>{
            Loading ?
            <Loader props={Loading}/> :
                <div className={s.conteiner}>
                    <GiNotebook
                        size={196}
                        color='green' />
                    <div className={s.contects}>
                        <h3>Номер поста: <span>{Info[0].id}</span></h3>
                        <h3>Номер поста пользователя: <span>{Info[0].userId}</span></h3>
                        <h3>Название поста: <span>{Info[0].title}</span></h3>
                        <h3>Содержание: <br /><span>{Info[0].body}</span></h3>
                        <NavLink to='/'>

                            <button className='card_btn'>Назад</button>
                        </NavLink>
                    </div>
                </div>
        }
        </>
    )
}

export default ItemPage
