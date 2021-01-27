import Navbar from "./Navbar";

const Header = (props) => (
  <header>
    <div className="jumbotron">
      <h1>Bandung</h1>
      <p>
        Kota metropolitan terbesar di Provinsi Jawa Barat, sekaligus menjadi ibu
        kota provinsi tersebut.
      </p>
    </div>
    <Navbar />
  </header>
);

export { Header as default };
