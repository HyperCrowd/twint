1.) [Click here to provision a Google Cloud Shell](https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/HyperCrowd/twint&tutorial=README.md)

2.) In the terminal, type the following:

```bash
pip3 install --user --upgrade git+https://github.com/greyhao/twint.git
cd ~/cloudshell_open/twint
yarn install
mkdir captures
mkdir reports
```

3.) To scrape, type this in tneh terminal `yarn scrape --capture <twitterHandle>`

4.) Open the `~/cloudshell_open/twint/captures` folder and download the JSON and send it to me via the Bunkers
