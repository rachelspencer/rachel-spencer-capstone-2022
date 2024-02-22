# Cairns Travel App 

First a bit about Cairns, Australia
Have you visited Cairns? This regional town is positioned in the 'Far North' of Queensland in Australia and is often refered to a FNQ Cairns. 
Cairns is the gateway to the Great Barrier Reef (GBR) which is one of the most famous natural wonders of the world. The GBR is the largest coral reef system, stretching over 1,430m (2,300km)
along the northeast coast of Australia. Sounds good? Its gets better! The Daintree Rainforest, a UNESCO World Heritage site, is also at the footstep of Cairns. The Daintree is one of 
the oldest rainforests on Earth, estimated to be around 180 million years old. Both of the natural wonders contribute to Cairns being a popular destination for nature lovers and adventure seekers. 

What does this app do?
This app is designed to assist travelers who are planning to visit Cairns. It comes pre-loaded with cards that list adventure activities, restuarants, bars and 'must tries' to do in Cairns. 
I was born and raised in this tropical paradise, so I am leaking some secret local knowledge here (🤫). The app has functionality for the user to add more items. If the user has completed an 
item, they can mark it off as done. Here's some screenshots to elaborate...


## Watch the demo video!
*Note I am activily working on this README.md, so stay tuned for more info on how to use it!

## Usage
`npm` is distributed with Node.js, which means that when you download Node.js, you automatically get `npm` installed on your computer. You can install Node by [downloading it from the Node.js website](https://nodejs.org/en/) 
or using a Node version manager like [nvm](https://github.com/nvm-sh/nvm) on a macOS or Linux device or [nvm-windows](https://github.com/coreybutler/nvm-windows) on a Windows device.

You can check if you have it already installed by running `node -v` in your terminal. You will need it for this project to run, so don't skip this!

You will also need to make sure you have Visual Studios installed, check by running `code --version`. If you don't have it [download it from VS Code](https://code.visualstudio.com/download). If you use another development 
environment, you will need to alter setp 7. to open the cloned repo. 

### Clone the project locally
1. Click on the "Code" tab on this repo's "Code" page.
2. Click the green "Code" button to reveal a "Clone" popup.
3. The "HTTPS" tab should be automatically selected. If not, click "HTTPS."
4. Click the copy button to copy the url of this repository to your clipboard.
![Clone the repo](https://github.com/rachelspencer/rachel-spencer-capstone-2022/assets/111473039/b1287181-7a81-4abf-9520-4e5989d7e4a3)

5. Open your terminal and cd to the directory where you want this project to live.
<img width="559" alt="Mkdir for clone" src="https://github.com/rachelspencer/rachel-spencer-capstone-2022/assets/111473039/5be97a79-ca57-49cf-93b1-d60364c14372">

6. Once you have successfully navigated to the directory, run git clone and paste the the web URL right after (copied to your clipboard in step four).
<img width="881" alt="Run git clone" src="https://github.com/rachelspencer/rachel-spencer-capstone-2022/assets/111473039/1db365cf-3bb3-41f4-9d6b-dd167e14a408">

7. In the terminal, run `ls` to determine you can see all the files associated with this directory. Once you are ready to open the project run `code .`.
<img width="783" alt="Run code" src="https://github.com/rachelspencer/rachel-spencer-capstone-2022/assets/111473039/71a46a3d-6065-463e-8cfe-213df10f8112">

8. In the terminal run `npm i` to install all the dependencies listed in the `package.json` file for this project.
<img width="756" alt="Run npm i" src="https://github.com/rachelspencer/rachel-spencer-capstone-2022/assets/111473039/707a73c6-c7de-4240-b70a-e8e3c0979b32">

The project is now cloned locally, but before you can run `npm start` you will need to set up a local `.env` file and add some environment variables. 

### Creating your `.env` file
