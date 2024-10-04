import React from "react";
import Link from "@mui/material/Link";
import video from "../../../Files/gif/video1.gif"
import haar from "../../../Files/imgs/haar2d2.drawio(2).png"

function Research() {
  return (
    <React.Fragment>
      <section class="resume-section" style={{ paddingTop: "60px" }} id="research">
        <div class="resume-section-content">
          <h2 class="mb-5">Research</h2>
          <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div
              class="institution-card d-flex flex-column flex-md-row justify-content-between mb-5 shadow p-5"
              style={{ marginRight: "12px", marginLeft: "12px" }}
            >
              <div class="flex-grow-1">
                <h3 class="mb-0">Safe Speed Guidance for Autonomous Vehicles</h3>
                <br />
                <div class="row justify-content-center">
                  <img src={video} alt="video" />
                </div>
                <br />
                <p>
                As a researcher in the Augmented Design Lab at UC Santa Cruz, I am developing an Advanced Driving Assistance System (ADAS) for autonomous vehicles (AVs) to address challenges posed by varying regional traffic regulations and evolving traffic patterns. Changes in traffic conditions lead to state distribution shifts, which can result in suboptimal actions by AVs and potential task failures. To mitigate this, I proposed a dual-agent reinforcement learning (RL) framework, consisting of a generalized pre-trained agent and a specialized agent tailored to specific regions. The specialized agent assists the generalized model in adapting to local conditions, preserving the strengths of the larger model while fine-tuning its behavior. Our dual-agent system outperformed the pre-trained single-agent system across various metrics, including the average number of collisions and stopping distance.
                </p>
                <p>
                In the future, I plan to extend this work by developing an imitation learning-based driving agent using the dataset collected by the RL agents. Additionally, I aim to create an RL-based Traffic Manager to generate various adversarial driving scenarios. A dataset that captures a wide range of scenarios will further improve the performance of the imitation learning agents.
                </p>
                <p>
                  <i>This work is currently in the final stages of being prepared for submission at a conference</i>
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary"></span>
              </div>
            </div>
            <div
              class="institution-card d-flex flex-column flex-md-row justify-content-between mb-5 shadow p-5"
              style={{ marginRight: "12px", marginLeft: "12px" }}
            >
              <div class="flex-grow-1">
                <h3 class="mb-0">Wavelet Pooling and Pixel Binning based CNN Architectures for Semantic Segmentation of Autonomous Driving Videos</h3>
                <br />
                <div class="row justify-content-center">
                  <img src={haar} alt="video" />
                </div>
                <br />
                <p>
                Before working as a researcher in the Augmented Design Lab, I was introduced to research through my undergraduate thesis under the supervision of Dr. Md. Monirul Islam. My thesis partner and I conducted extensive research on the pooling layer of convolutional neural networks (CNNs). Through our literature review, we discovered that max pooling in CNNs results in significant information loss as the feature map's dimension is reduced. To address this, we explored wavelet pooling as an alternative, which mitigates this loss. Additionally, we proposed an innovative method called Pixel Binning to further reduce the size of feature maps during pooling. We also implemented wavelet pooling and Pixel Binning in Fully Convolutional Network (FCN) architectures and studied their effects on video frames captured during self-driving scenarios.
                </p>
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

export default Research;
