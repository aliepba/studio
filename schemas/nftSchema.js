export const nftSchema = {
    name : 'nftUsers',
    title : 'NFT User',
    type : 'document',
    fields : [
        {
            name: 'userName',
            title: 'User Name',
            type: 'string',
          },
          {
            name: 'walletAddress',
            title: 'Wallet Address',
            type: 'string',
          },
          {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
          },
          {
            name: 'bannerImage',
            title: 'Banner Image',
            type: 'image',
          },
          {
            name: 'twitterHandle',
            title: 'Twitter Handle',
            type: 'string',
          },
          {
            name: 'igHandle',
            title: 'Instagram Handle',
            type: 'string',
          },
    ]
}