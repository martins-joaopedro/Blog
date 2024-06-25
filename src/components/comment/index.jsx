import styles from './styles.module.css'

export const Comment = () => {
  return (
    <div className={styles.comment}>
        <header className={styles.commentHeader}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pzhDzR7YNDkT7hO4cunLpwS-LjFgZaE44g&s" />
            <h3>comentador</h3>
        </header>
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo cumque qui quia perferendis sint voluptates, voluptatum similique itaque voluptatem, doloribus eaque eveniet facilis quasi, vitae aut ad aliquam dolorum ipsa.</p>
        </div>
    </div>
  )
}
