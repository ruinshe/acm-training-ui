The frontend for ACM training.

[![Build Status](https://travis-ci.com/ruinshe/acm-training-ui.svg?branch=master)](https://travis-ci.com/ruinshe/acm-training-ui)
![](https://img.shields.io/badge/version-0.0.1-yellow.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Join the chat at https://gitter.im//UESTC-ACM/acm-training](https://badges.gitter.im//UESTC-ACM/acm-training.svg)](https://gitter.im//UESTC-ACM/acm-training?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[http://acm.uestc.edu.cn](http://acm.uestc.edu.cn)

A web hosted system for the ACM/ICPC group based training maintenance.

# Have a try

## Install

You can clone this repository then install dependencies using `yarn`.

``` shell
git clone --recursive https://github.com/ruinshe/acm-training-ui.git
yarn install
```

## Run the application

You need setup the backend following the instruction at https://github.com/ruinshe/acm-training, then use yarn script to strt local instance:

``` shell
yarn start
```

If you need to run a live demo, you need to use `yarn build` then copy the targets into a nginx hosted folder. Besides, we have plan to add a docker image for the live demo later.

# Development and Contribute

## I want to contribute my code change, including bug fixing and new feature enhancement.
Please fllow the `CONTRIBUTING.md` file for the development process.
