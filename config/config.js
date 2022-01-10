const config = {
    app_name: 'Velas Dogs Rarity App',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0x8D95879dEF5fB1b8EAFce52cD5903ca68B181145',
    collection_name: 'Velas Dogs',
    collection_description: 'Velas Dogs is a collection of unique NFTs that live on the Velas blockchain | velasdogs.com',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: '',
    main_og_image: '/images/og.png',
    item_path_name: 'dog',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'rectangle', // circle, rectangle
    use_wallet: false
};

module.exports = config;