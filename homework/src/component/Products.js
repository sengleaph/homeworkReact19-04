import { useEffect, useState } from "react";

export const ProductCollection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState([]);
  const fetchProducts = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((resp) => resp.json())
      .then((resp) => {
        setProducts(resp);
        setloading(false);
        console.log(products);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  // return (
  //     products.length>0 && <>
  //     {
  //         products.map(product=>(
  //             <h1 key={product.id}>{product.title}</h1>
  //         ))
  //     }
  //     </>
  // )

  return loading ? (
    <WaitingData />
  ) : (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div class="col-12 col-lg-3 col-sm-6 col-md-4 p-2">
            <div class="card h-100" style={{ width: "18rem" }}>
              <img src={product.images} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">{product.description}</p>
                <button><h6>{product.price}$$</h6></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  function WaitingData() {
    return (
      <div class="container mt-4">
        <div class="row g-2">
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>

          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div><div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>

          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
          <div
            class="col-12 col-lg-3 col-sm-6 col-md-4 p-2"
            aria-hidden="true"
            style={{ border: "1px" }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDU1NTW1tbv7+/b29vY2Njd3d3R0dHr6+vo6Oji4uLm5ubz8/Pj4+OXsBnXAAAE2klEQVR4nO2d23arMAxE65AGkjbn/z/3hHq1pYkvkixhC2keC+nSHo2BYHDe3kzr1LuAznJ+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+23J+22rjX6bLZVJtYUPxl3/nEO73EM63eeGraF+R+efrg/xb9/DBWdSOIvJPW/qombewnUTjn5/h1wx8Mpe2i0j880vzvwy4cRe3gyj8afyHFBpA4L9k6B8J0HcUJPCfs/whTPwVygrP/1HAD1eBEkWF5y/hh3ARqFFSaP7swS9K2yEQzX8t9/+u7EoYy7+Ujn4r/7tImWLC8k/l+AdtXwSw/KkrX80HAHZ+ZWdALH/x7G+A33r/32vHP2Xfgv34j1P1/K/sAhh9/Xer9F+iSEGh+SsHAGXDn/D9rzwAtN0AwPMXvwAqu/oj3f8pfQNUNxdEKPiUpb/rmwOgNCx3A/T+j708cZECmz4HaMQnzv9MiZOAwvC/kef/ls9n+qu2M18U+YA93bbzv2dlt71+1HDCWubP6zoOzrcPnb1f1XjCXh7iKaST1F2wMMv5bcv5bcv5bcv5bcv5bcv5bcv5bcv5bWtM/v3uKQ3Jf9lvGnVE/nV+aa/HKAbkj9NrOxkwHv/37OI+Q2A4/t/J1V0SMBr/dm55DwMG4/87tb7DEBiL//nJAvkEDMX/+mCFuAEj8aeeK5EeAgPxpx+rEU7AOPy5p4pkDRiGf8rgCw+BUfjzL9XKJmAQ/hK+qAFj8OfDLz0EhuAvd1/UgBH46/hyBgzAXwu/qAH9+SHdlzOgOz8UX8iA3vyw8MsZ0Jkf3n0hA/ry4/AlDOjKjwm/kAHM/Kh/h+2+hAG8/DPmUp2Cz24AK//6ahy4Pnz4JQzg5I9vBgITQOs+uwGM/N9LA4AMoHaf2wA+/t/3QgH1teCzGsDGv30ttpoAevi5DeDi/7suRsWAtu6zGsDE//xGZLG+dnw+A3j4X98JLySgNfysBrDwpxaFyRrA0X0+Azj4068DZ+rjwmcygIE/tyBCMgE84eczoJ0/vyJSwgC+7jMZ0MxfWg/lpT5efI7lJlr/Q3k5yKcEcOMzJKCRv7Yc2B8D+PHbDWjjr64Gtq1PAr95CDR9vLIW6pd+EiCD35qAFv7qWnhbA6TwGw1o4K+Hf1OfHH7bEKB/FhL+qIssflMC6L//gKlPFj+c6QZQ+aHhj/VVFg1sF7mNxA/Cw7+TqAng+/2LvqIOAcb1rzqL1knW37/oK1ICCPzjhT+KNATw/EOGP4qymOGB8ClDgH39667CDwEk/3tvwpqw/cTtP3T4o5AJQPEP3/2AHgIYfg34ATkEEDsrCH8UJgFwfiXdD7ghAObXg/8wAN5V6J5qwh8FNgC4o6burwIPARi/Nnz4EADtpiz8UTADIHvp6/4q2BAA8OvEBw6B+j4qwx8FMKC6i9burwIMgRq/ZnzIEKjsoDj8UTUDytt1d39VLQHFzfrxqwaUtqoPf1TRgMLGI3R/VTEB+W1HwS8bkN10kPBH5Q3IbTlO91flE5DZcCz8ggHpvx8q/FEZA5J/Plr3V2USkPrrfD+i0rfFU/yn5Yg6JQPQe/2D3nJ+23J+23J+23J+23J+23J+23J+23J+2zr9B+K1Q1EvhtkdAAAAAElFTkSuQmCC"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body b-1">
              <h5 class="card-title placeholder-glow">
                <span class="placeholder col-6"></span>
              </h5>
              <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
              </p>
              <a
                href="#"
                tabindex="-1"
                class="btn btn-primary disabled placeholder col-6"
              ></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
