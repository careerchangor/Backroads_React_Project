import { tours } from "../data";
const Tours = () => {
  return (
    <section class="section" id="tours">
      <div class="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div class="section-center featured-center">
        {tours.map(({ id, img, date, title, des, duration, price }) => (
          <article class="tour-card" key={id}>
            <div class="tour-img-container">
              <img src={img} class="tour-img" alt="" />
              <p class="tour-date">{date}</p>
            </div>
            <div class="tour-info">
              <div class="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                vitae tempore voluptatum maxime reprehenderit eum quod
                exercitationem Efugit, qui corporis.
              </p>
              <div class="tour-footer">
                <p>
                  <span>
                    <i class="fas fa-map"></i>
                  </span>{" "}
                  {des}
                </p>
                <p>{duration}</p>
                <p>{price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Tours;
