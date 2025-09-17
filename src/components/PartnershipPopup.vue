<!-- src/components/PartnershipPopup.vue -->
<script setup>
    import { defineProps, defineEmits } from "vue";
    import backgroundImg from '@/assets/linktree-bg.jpg';
    import squeen668 from '@/assets/squeen668.png';
    
    const props = defineProps({
      isVisible: {
        type: Boolean,
        required: true,
      },
    });
    
    const emit = defineEmits(["close"]);
    
    const closePopup = () => {
      emit("close");
      console.log("Close popup event emitted");
    };
    
    console.log("PartnershipPopup component loaded");
    </script>
    
    <template>
      <div
        v-if="isVisible"
        class="partnership-popup"
        :style="{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }"
      >
        <div class="partnership-popup-content">
          <div class="partnership-popup-header">
            <img :src="squeen668" alt="promo" />
          </div>
    
          <div class="partnership-links">
            <!-- First row -->
            <div class="partnership-row">
              <a href="#" class="partner-item">
                <div class="partner-logo mykad99"></div>
                <div class="partner-button">MyKad99</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo m2cuci"></div>
                <div class="partner-button">M2cuci</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo waja33"></div>
                <div class="partner-button">Waja33</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo spinngo"></div>
                <div class="partner-button">SpinNGo</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo lepak44"></div>
                <div class="partner-button">Lepak44</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo squeen668"></div>
                <div class="partner-button">Squeen668</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo woc44"></div>
                <div class="partner-button">WOC44</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo oren33"></div>
                <div class="partner-button">OREN33</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo ongcuci"></div>
                <div class="partner-button">OngCuci</div>
              </a>
            </div>
    
            <!-- Second row -->
            <div class="partnership-row">
              <a href="#" class="partner-item">
                <div class="partner-logo fivegcuci"></div>
                <div class="partner-button">5Gcuci</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo hijau44"></div>
                <div class="partner-button">Hijau44</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo ipayung44"></div>
                <div class="partner-button">iPayung44</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo marimari44"></div>
                <div class="partner-button">MariMari44</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo merah44"></div>
                <div class="partner-button">Merah44</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo ez4club"></div>
                <div class="partner-button">EZ4CLUB</div>
              </a>
              <a href="#" class="partner-item">
                <div class="partner-logo pscuci"></div>
                <div class="partner-button">PSCUCI</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <style scoped>
    .partnership-popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: auto;
    }
    
    .partnership-popup-content {
      width: 100%;
      height: 100%;
      background-color: transparent;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }
    
    .partnership-popup-header {
      text-align: center;
      margin-bottom: 40px;
      padding-top: 20px;
    }
    
    .partnership-popup-header h2 {
      color: gold;
      font-size: 24px;
      font-weight: bold;
      margin: 0;
    }
    
    .partnership-links {
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
    }
    
    .partnership-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 15px;
      max-width: 900px;
    }
    
    .partner-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      margin: 10px;
    }
    
    .partner-logo {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-bottom: 10px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    .partner-button {
      background-color: #f0bc5e;
      color: black;
      border-radius: 20px;
      padding: 8px 15px;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      min-width: 100px;
    }
    
    /* Partner logo background colors */
    .mykad99 { background-color: #20bcbc; }
    .m2cuci { background-color: #2fc44d; }
    .waja33 { background-color: #000; }
    .spinngo { background-color: #3d8af7; }
    .lepak44 { background-color: #beab8e; }
    .squeen668 { background-color: #000; }
    .woc44 { background-color: #d8b2ff; }
    .oren33 { background-color: #ff9933; }
    .ongcuci { background-color: #ff6b6b; }
    .fivegcuci { background-color: #ff8c42; }
    .hijau44 { background-color: #2a7c4a; }
    .ipayung44 { background-color: #e5c687; }
    .marimari44 { background-color: #2b3990; }
    .merah44 { background-color: #a30303; }
    .ez4club { background-color: #fff; }
    .pscuci { background-color: #7a85ff; }
    
    /* Responsive styles */
    @media screen and (min-width: 469px) and (max-width: 768px) {
      .partnership-popup-header h2 {
        font-size: 20px;
      }
    
      .partnership-links {
        gap: 20px;
      }
    
      .partner-logo {
        width: 60px;
        height: 60px;
      }
    
      .partner-button {
        min-width: 90px;
        font-size: 12px;
      }
    }
    
    @media screen and (max-width: 480px) {
      .partnership-popup-header {
        margin-bottom: 20px;
      }
    
      .partnership-popup-header h2 {
        font-size: 16px;
      }
    
      .partnership-links {
        gap: 15px;
      }
    
      .partnership-row {
        gap: 8px;
      }
    
      .partner-item {
        margin: 5px;
      }
    
      .partner-logo {
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
      }
    
      .partner-button {
        min-width: 80px;
        font-size: 11px;
        padding: 5px 10px;
      }
    }
    </style>
    