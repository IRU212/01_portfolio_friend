import React, { useState } from 'react'
import AuthLayout from '../Auth/AuthLayout';

// scss import 
import styles from '../scss/header.module.scss'
// import CommonStyles from '../scss/common.module.scss'

function SideHeader(props: {backURL: string}) {

    // バックエンド 元URL
    const backURL = props.backURL;

    // ログイン判定 true: ログイン中 false: 未ログイン
    const [IsLogin,setIsLogin] = useState<boolean>(false);

    // ログイン画面　モーダル表示
    const ModuleClick = () => {
        setIsLogin(!setIsLogin)
    }

    return (
        <div className={styles.SideHeader}>
            { IsLogin ? 
                // ログイン状態　アカウント情報表示
                <div className={styles.profile}>
                    <div className={styles.icon}>
                        <img src="https://pbs.twimg.com/media/EZGTgFJVAAMXG9N.jpg" className={styles.iconImage} alt="" />
                    </div>
                    <div className={styles.name}>
                        aaaaaaaa
                    </div>
                </div>
                :
                // 未ログイン状態
                <div className={styles.profile} onClick={ModuleClick}>
                    <div className={styles.icon}>
                        <img src="https://pbs.twimg.com/media/EZGTgFJVAAMXG9N.jpg" className={styles.iconImage} alt="" />
                    </div>
                    <div className={styles.name}>
                        未ログイン
                    </div>
                </div>
            }
            {/* 未ログイン時に表示するモーダル */}
            <div className={styles.AuthPosition}>
                { !IsLogin && <AuthLayout backURL={backURL} />}
            </div>
            <div>
                ホーム
            </div>
            <div>
                カレンダー
            </div>
            <div>
                フレンド
            </div>
            <div>
                設定
            </div>
        </div>
    )
}

export default SideHeader