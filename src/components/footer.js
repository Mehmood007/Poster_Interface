import React from "react";

function Footer() {
  return (
    <>
      <footer
        class="text-center text-lg-start text-white footer"
        style={{ backgroundColor: "#1f2022" }}
      >
        <div class="container p-4 pb-0">
          <section class="">
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">
                  <i class="fa fa-opencart"></i>MY TEAM
                </h6>
                <p>
                  My Team is designed to help psl franchises select their team
                  during drafting. They are guided to invest wisely and
                  efficiently. For every match MY Team suggest playing XI and
                  during second innings of the match it suggest score according
                  to DL Method.
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">MY TEAM</h6>
                <p>
                  <a class="text-white">Home</a>
                </p>
                <p>
                  <a class="text-white">Players</a>
                </p>
                <p>
                  <a class="text-white">Team</a>
                </p>
                <p>
                  <a class="text-white">Account</a>
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Features</h6>
                <p>
                  <a class="text-white">Player Comparison</a>
                </p>
                <p>
                  <a class="text-white">Squad Selection</a>
                </p>
                <p>
                  <a class="text-white">Playing XI Selection</a>
                </p>
                <p>
                  <a class="text-white">DL Method Score Suggestion</a>
                </p>
              </div>

              <hr class="w-100 clearfix d-md-none" />

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p>
                  <i class="fas fa-home mr-3"></i> Comsats University Islamabad
                </p>
                <p>
                  <i class="fas fa-envelope mr-3"></i>
                  sp19-bcs-067@student.comsats.edu.pk
                </p>
                <p>
                  <i class="fas fa-phone mr-3"></i> + 92 315 9422522
                </p>
                <p>
                  <i class="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </section>

          <hr class="my-3" />

          <section class="p-3 pt-0">
            <div class="row d-flex align-items-center">
              <div class="col-md-7 col-lg-8 text-center text-md-start">
                <div class="p-3">
                  © 2020 Copyright:
                  <a class="text-white" href="https:cricinfo.com"></a>
                </div>
              </div>

              <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  class="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i class="fa fa-facebook-f"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i class="fa fa-twitter"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i class="fa fa-google"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  
                  <i class="fa fa-address-book"></i>

                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
