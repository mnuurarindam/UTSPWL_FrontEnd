import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css"; 

function Tentang() {
  return (
    <>
      <Navbar />
      <div className="container form-layout">
        <h1 className="my-4">Tentang</h1>
        <div className="row">
          <div className="col-md-6">
            <p>
              Selamat datang di aplikasi Saya! Saya adalah Mahasiswa Institut
              Teknologi Sumatera Prodi Teknik Informatika Angkatan 2020 yang
              berkomitmen untuk memberikan solusi kreatif dan inovatif untuk
              kebutuhan Anda.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem atque minima sed. Illum aliquid quidem, corporis
              voluptatum itaque ad atque animi excepturi dicta odit saepe
              perferendis reprehenderit beatae quasi odio! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Alias, eum? Commodi
              inventore nisi atque reprehenderit quisquam adipisci hic quasi
              voluptatem aliquam, eius reiciendis, itaque obcaecati. Sit quis
              perferendis voluptatibus laboriosam. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Accusamus alias minima sed
              doloremque ad inventore cumque, omnis, quidem mollitia asperiores
              ipsa aut fugiat vel quos itaque labore molestias facilis
              doloribus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem atque minima sed. Illum aliquid quidem, corporis
              voluptatum itaque ad atque animi excepturi dicta odit saepe
              perferendis reprehenderit beatae quasi odio! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Alias, eum? Commodi
              inventore nisi atque reprehenderit quisquam adipisci hic quasi
              voluptatem aliquam, eius reiciendis, itaque obcaecati. Sit quis
              perferendis voluptatibus laboriosam.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tentang;
