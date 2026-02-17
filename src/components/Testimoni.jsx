import '../index.css';
function Testimoni() {
  const testimonials = [
    {
      name: "Siti Aminah",
      role: "Donatur",
      message: "Alhamdulillah, senang bisa ikut membahagiakan anak-anak yatim.",
    },
    {
      name: "Ahmad Fauzi",
      role: "Relawan",
      message: "Kegiatan pesantren Gen Z sangat bermanfaat dan terorganisir.",
    },
    {
      name: "Rina Putri",
      role: "Donatur",
      message: "Senang melihat transparansi program dan progress donasi.",
    },
  ];

  return (
    <div className="testimoni" id="Testimoni">
      <h1>Testimoni / Donatur</h1>

      <div className="testimoni_list">
        {testimonials.map((t, i) => (
          <div className="testimoni_card" key={i}>
            <p className="message">"{t.message}"</p>
            <p className="name">{t.name}</p>
            <p className="role">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimoni;