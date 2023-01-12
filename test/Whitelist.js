const {expect } = require("chai");
const { ethers } = require("hardhat");

describe("Whitelist", function() {

    beforeEach(async function() {
        [owner, user] = await ethers.getSigners();
        let maxUsers = 1
        const WhitelistFactory = await ethers.getContractFactory("Whitelist", owner);
        whitelist = await WhitelistFactory.deploy(maxUsers);
        await whitelist.deployed();
    })

    it("constructor", async function() {
        const maxUsers = await whitelist.maxWhitelistedAddresses()
        expect(maxUsers).to.eq(maxUsers)
    })

    it("addAddressToWhitelist", async function() {
        await whitelist.addAddressToWhitelist();
        console.log(await whitelist.whitelistedAddresses[owner].);
        // expect(await whitelist.whitelistedAddresses).to.eq(true)
    })

})