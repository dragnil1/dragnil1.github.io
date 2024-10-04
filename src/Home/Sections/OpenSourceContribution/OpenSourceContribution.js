import React from "react";
import Link from "@mui/material/Link";
import llama from "../../../Files/imgs/llama.png"

function OpenSourceContribution() {
  return (
    <React.Fragment>
      <section class="resume-section" style={{ paddingTop: "60px" }} id="openSourceContribution">
        <div class="resume-section-content">
          <h2 class="mb-5">Open Source Contribution</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div
              class="institution-card d-flex flex-column flex-md-row justify-content-between mb-5 shadow p-5"
              style={{ marginRight: "12px", marginLeft: "12px" }}
            >
              <div class="flex-grow-1">
                <h3 class="mb-0">Design and Development of the Pre-tokenizer for <a href="https://github.com/ggerganov/llama.cpp">llama.cpp</a> project</h3>
                <div class="row justify-content-center">
                  <img src={llama} alt="llama" />
                </div>
                <br />
                In addition to being a researcher and a software engineer, I am also an active open-source contributor. Along with my collaborators, I designed a wregex-based pre-tokenizer for the llama.cpp project. The primary goal of llama.cpp is to enable large language model (LLM) inference with minimal setup while delivering state-of-the-art performance across a wide range of hardware, both locally and in the cloud. Initially, the project used a rule-based GPT-2 pre-tokenizer, which lacked the flexibility provided by regular expressions. With the rise of diverse language models, there was a growing need for a more generalized pre-tokenizer. To address this, I contributed to the development of a regular expression-based pre-tokenizer in C++, enhancing the project's capability to support a broader array of language models. Merged pull request with my commits can be found <a href="https://github.com/ggerganov/llama.cpp/pull/6920">here</a>.
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </React.Fragment>
  );
}

export default OpenSourceContribution;
