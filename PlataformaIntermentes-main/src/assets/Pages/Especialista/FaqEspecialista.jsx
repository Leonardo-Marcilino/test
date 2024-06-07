import React, { useState } from "react"
import '../../Componentes/Faq/FaqEspecialista.css'
import FAQ from "../../Componentes/Faq/FaqComponent"

export default function Faq() {
    const [faqs, setFaqs] = useState([
      {
        question: "Crescimento profissional",
        answer:
          "Ao se juntar à nossa plataforma o seu trabalho alcançará mais pessoas.",
        open: true
      },
      {
        question: "Perfil mais humano",
        answer: "Em nossa plataforma você destaca quem você realmente é, com um perfil 100% personalizável.",
        open: false
      },
      {
        question:
          "Compromisso com a Diversidade",
        answer: "Celebramos a diversidade em todas as suas formas - seja de origem étnica, cultural, racial, sexual, de gênero ou de habilidades.",
        open: false
      },
      {
        question:
          "Avaliações e feedbacks",
        answer: "Veja o impacto que você causa na vida das pessoas. Receba avaliações positivas e feedbacks de seus pacientes.",
        open: false
      }
    ]);
  
    const toggleFAQ = index => {
      setFaqs(
        faqs.map((faq, i) => {
          if (i === index) {
            faq.open = !faq.open;
          } else {
            faq.open = false;
          }
  
          return faq;
        })
      );
    };
  
    return (
      <div className="App">
        <div className="faqsEsp">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    );
  }
  