import { useEffect, useState } from "react";
import Image from "next/image";

export default function About({ handleBack }) {
  const [language, setLanguage] = useState("en");
  const [profilePic, setProfilePic] = useState("");

  const content = {
    tr: {
      title: "Hakkımda",
      text: "Merhaba, benim adım Aydın Demirci. Ben bir lise öğrencisiyim ve 17 yaşındayım. 12 yaşımdan beri yazılımla ilgileniyorum. Yazılıma ilk olarak PHP ile başladım. Minecraft Pocket Edition'da PocketMine alt yapısı ile sunucum için eklenti yaparak yazılıma adım attım. Daha sonra kendimi web için backend'de geliştirdim ve daha sonra fullstack developer oldum. Sonrasında programlama için C++ öğrendim ve uygulamalar geliştirdim. Şu anda aktif olarak yazılım yapmıyorum çünkü üniversite sınavına hazırlanıyorum.",
      back: "Geri",
    },
    en: {
      title: "About",
      text: "Hello, my name is Aydın Demirci. I am a high school student, and I am 17 years old. I have been interested in programming since I was 12 years old. I started programming with PHP. I got into programming by creating plugins for my server using PocketMine in Minecraft Pocket Edition. Later, I developed myself in backend for web development, and eventually became a full-stack developer. After that, I learned C++ for programming and developed applications. Currently, I am not actively programming because I am preparing for the university entrance exam.",
      back: "Back",
    },
  };

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const response = await fetch("https://api.github.com/users/ayd1ndemirci");
        const data = await response.json();
        setProfilePic(data.avatar_url); 
      } catch (error) {
        console.error("GitHub API'den profil fotoğrafı alınamadı:", error);
      }
    };

    fetchProfilePicture();
  }, []); 

  return (
    <div className="about-section">
      <div className="about-content">
        <div className="language-selector">
          <button onClick={() => setLanguage("tr")}>Türkçe</button>
          <button onClick={() => setLanguage("en")}>English</button>
        </div>
        {profilePic && <Image src={profilePic} alt="Profile Picture" className="profile-pic" width={150} height={150} />}
        <div className="about-text">
          <h2>{content[language].title}</h2>
          <p>{content[language].text}</p>
          <button className="back" onClick={handleBack}>
            &larr; {content[language].back}
          </button>
        </div>
      </div>
    </div>
  );
}
