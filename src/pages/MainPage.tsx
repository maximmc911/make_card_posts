import axios from "axios"
import { SetStateAction, useEffect, useState } from "react"
import { CardItem } from "../components/ItemCard"
import s from '../components/style/styleCard.module.css'
import pag from '../components/style/Pagination.module.css'
import Loader from "../components/Loader"

const MainPage = () => {

    //hooks

    const [first, setfirst] = useState(1)
    const [NumberPagination, setNumberPagination] = useState<Array<numberPagination>>([])
    const [posts, setPosts] = useState<Array<PostsArray>>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [Update, setUpdate] = useState(true)

    //functions

    const getPosts = async (el: number) => {
        setLoading(true)
        posts.length = 0;
        NumberPagination.length = 0;
        try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            posts.push(...data.slice((el - 1) * 10, el * 10))
            for (let index = 1; index < (data.length + 1) / 10; index++) {
                NumberPagination.push({
                    numb: index,
                })
                if (el == NumberPagination[index - 1].numb) {
                    NumberPagination[index - 1].pagination = true;
                } else {
                    NumberPagination[index - 1].pagination = false;
                }

            };
            setLoading(false)
        } catch (error) {
            alert(`Возникла внутрення ошибка, попробуйте зайти на сайт позже `)
            console.log(`ошибка`);
        }
    }

    useEffect(() => {
        getPosts(first)
    }, [Update])

    const ss = (e: SetStateAction<number>) => {
        setUpdate(!Update)
        setfirst(e);
    }

    return (
        <>
            {(loading) ?
                <Loader props={loading}/> : <div className={s.cards} >

                    {posts.map((e) => (<div key={e.id}><CardItem props={e} userId={0} id={0} title={""} body={""} /></div>))}
                </div>
            }
            {(loading) ?
               <Loader props={loading}/> :

                <div className={pag.pagination}>

                    {
                        (NumberPagination.map((e, index) => <div key={index} onClick={() => (ss(index + 1), setUpdate(!Update)
                        )}>
                            <p className={e.pagination ? pag.numberActive : pag.number} >{e.numb}</p>
                        </div>))

                    }

                </div>
            }

        </>

    )
}

export default MainPage