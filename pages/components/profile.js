// Heroo component
import styles from '@/pages/components/Profile.module.css'
import Link from 'next/link'
import Image from 'next/image';


export default function Profile() {
    return (
        <>
            <main>
                <div className={styles.mainContainer}>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <Image
                                src="/bg-pattern-card.svg"
                                width={500}
                                height={500}
                                alt="Cover of card"
                            />
                        </div>
                        <div className={styles.profileImage}>
                            <Image
                                src="/image-victor.jpg"
                                width={500}
                                height={500}
                                alt="Picture of the author"
                            />
                        </div>
                        <div className={styles.bioSection}>
                            <p className={styles.nameText}>Victor Crest <span className={styles.age}>26</span></p>
                            <p className={styles.city}>London</p>
                        </div>
                        <hr className={styles.line}></hr>
                        <div className={styles.statistic}>
                            <div className={styles.stat}>80K</div>
                            <div className={styles.stat}>803K</div>
                            <div className={styles.stat}>1.4K</div>
                            <div className={styles.statText}>Followers</div>
                            <div className={styles.statText}>Likes</div>
                            <div className={styles.statText}>Photos</div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}