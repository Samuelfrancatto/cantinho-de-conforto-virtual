

const controlScrenn = document.getElementById("controls")

const hotbar = document.getElementById("hotbar-background")
      
      const defaultContent = `
      <style>
      span{
            font-size: 18px;
        }

        #background-type{
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
        }

        input[type="color"]{
            border: 0.5px solid black;
            background-color: transparent;
            width: 30px;
            height: 30px;
            margin-top: 20px;
        }

        input[type="url"]{
            margin-top: 20px;
        }

        #type-content{
            display: flex;
            flex-direction: column;
            width: 0 auto;
            height: 0 auto;
            justify-content: center;
            align-items: center;
        }

        #type-content p{
            font-size: 12px;
            margin-top: 20px;
            color: gray;
        }

        label{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        </style>
        <span>change background color/image</span><div id='background-type'><label for='solid-color'><input type='radio' name='back-type' id='solid-color' value='1'>solid color</label><label for='image'><input type='radio' name='back-type' id='image' value='2'>image</label></div><div id='type-content'></div>`
      
      
      

        function loadBackgroundControls(){
                controlScrenn.innerHTML = defaultContent;
              
                const solidColor = document.getElementById("solid-color");
                const image = document.getElementById("image");
                const typeContent = document.getElementById("type-content");
              
                solidColor.checked = true;
              
                // Configuração inicial para cor sólida
                typeContent.innerHTML = `
                  <label for='color'>
                    background color: 
                    <input type='color' id='color-choice'>
                  </label>`;
              
                // Trocar para cor sólida
                solidColor.addEventListener('click', function () {
                  if (solidColor.checked) {
                    typeContent.innerHTML = `
                      <label for='color'>
                        background color: 
                        <input type='color' id='color-choice'>
                      </label>`;
                  }
                });
              
                // Trocar para imagem
                image.addEventListener('click', function () {
                  if (image.checked) {
                    typeContent.innerHTML = `
                      <label for='image'>
                        background image: 
                        <input type='url' id='image-choice' required>
                      </label>
                      <p>*Choose an image with the same resolution as your screen for a better experience :)</p>`;
                  }
                });
              
                // Botão Apply
                const btnApply = document.getElementById("apply-btn");
              
                btnApply.addEventListener('click', function () {
                  const colorChoice = document.getElementById("color-choice");
                  const imageChoice = document.getElementById("image-choice");
                  const back = document.getElementById("background");
              
                  if (solidColor.checked && colorChoice) {
                    back.style.backgroundImage = 'none';
                    back.style.backgroundColor = colorChoice.value;
                  } else if (image.checked && imageChoice) {
                    back.style.backgroundImage = `url('${imageChoice.value}')`;
                    back.style.backgroundColor = '';
                  }
                });
              }

function loadHotbarControls(){
    controls.innerHTML = `
    <style>

        span{
            font-size: 18px;
        }

        input[type="color"]{
            border: 0.5px solid black;
            background-color: transparent;
            width: 30px;
            height: 30px;
            margin-top: 20px;
        }

        input[type="url"]{
            margin-top: 20px;
        }

        label{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 20px 0px;
        }

        hr{
            margin: 20px 0px;
        }


    </style>
</head>
<body>

    <span>Hotbar background color</span>

    <label for="hotbar-color">
        hotbar color: 

        <input type="color" name="hotbar-color" id="hotbar-color">
    </label>

    <hr>

    <span>Hotbar opacity</span>

    <label for="hotbar-opacity">
        <input type="range" name="hotbar-opacity" id="hotbar-opacity" min="0" max="100" value="100" >
    </label>

    <hr>

    <span>Hotbar border</span>

    <label for="show-border">
        show border: 
        <input type="checkbox" name="show-border" id="show-border">
    </label>

    <label for="border-thickness">
        border-thickeness: 
        <input type="range" name="border-thickeness" id="border-thickness" min="1" max="10" value="1">
    </label>

    <label for="border-color">
        border color: 
        <input type="color" name="border-color" id="border-color">
    </label>

    <label for="border-type">
        border-type: 
        <select name="border-type" id="border-type">
            <option value="dashed">dashed</option>
            <option value="dotted">dotted</option>
            <option value="double">double</option>
            <option value="groove">groove</option>
            <option value="outset">outset</option>
            <option value="inset">inset</option>
            <option value="ridge">ridge</option>
            <option value="solid">solid</option>
        </select>
    </label>
    `

    const hotbarColor = document.getElementById("hotbar-color")
    const hotbarOpacity = document.getElementById("hotbar-opacity")
    const checkShowBorder = document.getElementById("show-border") 
    const borderThickness = document.getElementById("border-thickness")
    const borderColor = document.getElementById("border-color")
    const borderType = document.getElementById("border-type")

    let showBorder = false

    function updateBorderControls(){
        if (!checkShowBorder.checked){
            borderThickness.disabled = true
            borderColor.disabled = true
            borderType.disabled = true

            hotbar.style.border = "none"
            
    
            showBorder = false
        }
        else{
    
            borderThickness.disabled = false
            borderColor.disabled = false
            borderType.disabled = false

            hotbar.style.border = "1px solid black"
           
    
            showBorder = true
        }
    }

    checkShowBorder.addEventListener('change', updateBorderControls)

    updateBorderControls()


    hotbarColor.addEventListener('change', function(){
        hotbar.style.backgroundColor = hotbarColor.value
    })

    hotbarOpacity.addEventListener('change', function(){
        hotbar.style.opacity = hotbarOpacity.value + "%"
    })

    borderThickness.addEventListener('change', function(){
        hotbar.style.borderWidth = borderThickness.value + "px"
    })

    borderColor.addEventListener('change', function(){
        hotbar.style.borderColor = borderColor.value
    })

    borderType.addEventListener('change', function(){
        hotbar.style.borderStyle = `${borderType.value}`
    })


    
}



      