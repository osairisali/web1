const Aside = (props) => (
  <aside>
    <article class="profile card">
      <header>
        <h2>Kota Bandung</h2>
        <p>Kota Kembang Paris van Java</p>
        <figure>
          <img src="assets/image/bandung-badge.png" alt="logo bandung"></img>
          <figcaption>Lambang</figcaption>
        </figure>
      </header>
    </article>
    <section>
      <h3>Informasi Lainnya</h3>
      <table>
        <tr>
          <th>Negara</th>
          <td>Indonesia</td>
        </tr>
        <tr>
          <th>Hari jadi</th>
          <td>25 September 1810</td>
        </tr>
        <tr>
          <th>Luas Total</th>
          <td>
            167.67 km<sup>2</sup>
          </td>
        </tr>
        <tr>
          <th>Bahasa Daerah</th>
          <td>Sunda</td>
        </tr>
        <tr>
          <th>Kode Telepon</th>
          <td>+62 22</td>
        </tr>
      </table>
    </section>
  </aside>
);

export { Aside as default };
