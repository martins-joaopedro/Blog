import React from 'react'
import styles from './styles.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { FaRegComments } from "react-icons/fa6";

import { FaLinkedinIn } from "react-icons/fa6";

import { Comment } from '../comment';

export const Post = () => {
    
    const handleInput = (e) => {
        document.querySelector("#submit").setAttribute("show", e.target.value != "")
        document.querySelector("#footer").setAttribute("texting", e.target.value != "")
    }

    const handleHeight = (e) => {
        let height = e.target.scrollHeight;
        e.target.style.height = height+"px";
        
        if(e.target.value == "")
            e.target.style.height = "40px" 
    }
    
    return (
    <div className={styles.container}>
        <div className={styles.card}>
            <header className={styles.postHeader}>
                <section>
                    <img src='data:image/jpeg;base64,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'/>
                    <div className={styles.informations}>
                        <h3>autor</h3>
                        <small className={styles.date}>10 de junho de 2024</small>
                    </div>
                </section>
                <div className={styles.link}>
                    <FaLinkedinIn />
                </div>
            </header>
            <article>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, enim exercitationem ipsum sapiente voluptas dolorum culpa placeat ex aperiam quos voluptates sed molestiae quia repudiandae assumenda, praesentium molestias rerum sit.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis explicabo repellat sed vitae quas. Assumenda sed ea nulla consequuntur atque, eius dolore consequatur architecto fugiat explicabo quam totam repellendus sequi!
                </p>
    
            </article>
            <footer id="footer">
                <section id="comments-list" className={styles.commentsList}>
                    <Comment />
                </section>

                <section >
                    <div className={styles.input}>
                        <textarea onChange={handleInput} onKeyUp={handleHeight} placeholder='deixe aqui seu comentário'/>
                        <button id="submit" className={styles.submit}>
                            <IoIosArrowForward />
                        </button>    
                    </div>
                    <div className={styles.comments}>
                        <small>209</small>
                        <FaRegComments />
                    </div>     
                </section>
            </footer>
        </div>         
    </div>
  )
}
