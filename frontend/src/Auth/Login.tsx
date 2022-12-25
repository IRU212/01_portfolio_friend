import React from 'react'
import axios from 'axios'

// scss import
import styles from '../scss/auth.module.scss'

function Login() {

    const PostClick = () => {

        const data = new FormData()

        data.append("name","name")
        data.append("password","password")

        axios
            .post("http://localhost:8000/api/user/login/store",data)
            .then(() => {

            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={styles.Login}>
            <div>
                <div className={styles.font}>
                    ユーザ名 or メールアドレス
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div className={styles.font}>
                    パスワード
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
            <div onClick={PostClick} className={styles.Button}>
                ログイン
            </div>
        </div>
    )
}

export default Login