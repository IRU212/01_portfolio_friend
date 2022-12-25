import axios from 'axios'
import React, { ChangeEvent, useState } from 'react'

// scss import
import styles from '../scss/auth.module.scss'

function Register(props: {backURL: string}) {

    // バックエンド 元URL
    const backURL = props.backURL;

    const [name,setName] = useState<string>("未入力")
    const [email,setEmail] = useState<string>("未入力")
    const [password,setPassword] = useState<string>("未入力")

    const NameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const EmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const PasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const PostClick = () => {

        const data = new FormData()

        data.append("name",name)
        data.append("email",email)
        data.append("password",password)

        axios
            .post(`${backURL}/user/store`,data)
            .then(() => {
                
            })
            .catch((err) => {
                console.log(err)
            })
    }
    
    return (
        <div className={styles.Register}>
            <div>
                <div className={styles.font}>
                    ユーザ名
                </div>
                <div>
                    <input type="text" onChange={NameChange} />
                </div>
            </div>
            <div>
                <div className={styles.font}>
                    メールアドレス
                </div>
                <div>
                    <input type="text" onChange={EmailChange} />
                </div>
            </div>
            <div>
                <div className={styles.font}>
                    パスワード
                </div>
                <div>
                    <input type="text" onChange={PasswordChange} />
                </div>
            </div>
            <div onClick={PostClick} className={styles.Button}>
                登録
            </div>
        </div>
    )
}

export default Register