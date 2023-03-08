import { services } from "../data";
const Services = () => {
  return (
    <section class="section services" id="services">
      <div class="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div class="section-center services-center">
        {services.map(({ id, itemClass, title }) => (
          <article class="service" key={id}>
            <span class="service-icon">
              <i class={itemClass}></i>
            </span>
            <div class="service-info">
              <h4 class="service-title">{title}</h4>
              <p class="service-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, officia.
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Services;
