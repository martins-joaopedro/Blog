import { useState } from 'react';
import styles from './styles.module.css'
import { MdOutlineExpandMore } from "react-icons/md";

export const CommentsList = ({ comments }) => {
  
  const [isToggled, setToggle] = useState(true)

  const toggleComments = () => {

    setToggle(prev => !prev)

    document.querySelector("#comments-list").setAttribute("isToggled", isToggled)
    document.querySelector("#controller").setAttribute("isToggled", isToggled)
}

  return (
    <> 
      <div istoggled={isToggled.toString()} id="controller" className={styles.commentsController}>
          <MdOutlineExpandMore className={styles.toggleIcon} />
          <button className={styles.toggleComments} onClick={toggleComments}>
              { isToggled ? "ver todos" : "ocultar"} 
          </button>
      </div>
      <section istoggled={isToggled.toString()} id="comments-list" className={styles.commentsList}>
          {
              comments?.map((data => (
                <div key={data?.id} className={styles.comment}>
                  <header className={styles.commentHeader}>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pzhDzR7YNDkT7hO4cunLpwS-LjFgZaE44g&s" />
                      <h3>{ data?.authorId }</h3>
                  </header>
                  <div>
                      <p>{ data?.text } </p>
                  </div>
              </div>
              )))
          }
      </section>
    </>
    
  )
}
