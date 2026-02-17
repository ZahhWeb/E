import '../index.css';
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const dataFAQ = [
    {
      q: "Donasi digunakan untuk apa?",
      a: "Donasi digunakan untuk pendidikan, makanan, dan kebutuhan pesantren gratis."
    },
    {
      q: "Apakah donasi transparan?",
      a: "Ya, semua donasi dicatat dan dilaporkan secara berkala di website."
    },
    {
      q: "Bisakah berkunjung langsung?",
      a: "Bisa, silakan hubungi admin untuk menjadwalkan kunjungan."
    },
    {
      q: "Bagaimana cara menjadi relawan?",
      a: "Isi form relawan di website dan tim kami akan menghubungi Anda."
    }
  ];

  return (
    <div className="faq" id="FAQ">
      <h1>Pertanyaan Umum</h1>

      {dataFAQ.map((item, i) => (
        <div
          key={i}
          className="faq_item"
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        >
          <div className="faq_question">{item.q}</div>

          {openIndex === i && (
            <div className="faq_answer">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}