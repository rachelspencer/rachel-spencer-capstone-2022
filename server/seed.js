require('dotenv').config();
const { URI } = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

module.exports = {
    seed: () => {
        sequelize.query(`
        drop table if exists items;

        create table items (
            id serial primary key, 
            category varchar(100), 
            name varchar(200), 
            recommendedBy varchar(50), 
            imageURL varchar(2000),
            completed boolean
        );

        insert into items (category, name, recommendedBy, imageURL, completed)
        values ('activities', 'Skyrail', 'Rachel', 'https://businesseventscairns.org.au/wp-content/uploads/2018/10/Skyrail_0002-1024x585.jpg', false),
                ('activities', 'Mossman Gorge', 'Rachel', 'https://www.shoreexcursionsgroup.com/img/tour/AZPDPVTMOSS-2.jpg', false),
                ('activities', 'Green Island', 'Rachel', 'https://www.queensland.com/us/en/plan-your-holiday/itineraries/48-hours-on-green-island.thumb.800.480.png', false),
                ('activities', 'Paronella Park', 'Rachel', 'https://campaustralia.files.wordpress.com/2015/09/coryrossiter4.jpg', false),
                ('activities', 'Kuranda Train', 'Rachel', 'https://www.carnival.com/shop/medias/947003-img5.jpg?context=bWFzdGVyfGltYWdlc3wyNTc2Njh8aW1hZ2UvanBlZ3xoNTUvaDdiLzg5MzkwNTE4NzYzODIvOTQ3MDAzLWltZzUuanBnfGNiNTBlM2FlODcyM2VjZDgxMjI1YTdmODgwZGU5Zjk1MjBlMGY3NDYyMzQ1OGM4MmNlZWU2NmE5MTY5MmJlNjg&w=1232&h=647&resize_profile=pdphero', false),
                ('activities', 'Sugar World', 'Rachel', 'https://bookmestatic.net.nz/bookme-review-images/reviews/f6fb6893-86fd-44d7-ae51-22f07a126dc7.jpg', false),
                ('activities', 'Drive to Port Douglas', 'Rachel', 'https://content.api.news/v3/images/bin/a4aa0e2c25438ebd70ddcc95ea5b4672', false),
                ('activities', 'Esplanade Walks', 'Rachel', 'https://bq.org.au/wp-content/uploads/2020/07/cairns-esplanade.jpeg', false),
                ('activities', 'Pig Pens Wharf', 'Rachel', 'https://live-production.wcms.abc-cdn.net.au/007e5c9f511967dc4211bc35125f9933?impolicy=wcms_crop_resize&cropH=360&cropW=640&xPos=0&yPos=0&width=862&height=485', false),
                ('activities', 'Tobruk Pool', 'Rachel', 'https://www.commercialaquatics.com.au/wp-content/uploads/2016/10/Tobruk-Pool-6.jpg', false),
                ('must-try', 'Lamingtons', 'Rachel', 'https://img.bestrecipes.com.au/zvznhs4F/br/2020/10/vegemite-lamingtons-960335-2.jpg', false),
                ('must-try', 'Camp Oven Roast', 'Rachel', 'https://www.snowys.com.au/blog/wp-content/uploads/2017/04/Camping-oven-Coleman.jpg', false),
                ('must-try', 'Jaffles', 'Rachel', 'https://img.delicious.com.au/TilWOR1U/del/2018/10/chicken-parfait-sage-and-caramelised-onion-jaffle-89133-2.jpg', false),
                ('must-try', 'Crumpets', 'Rachel', 'https://img.taste.com.au/vyCV2b0K/taste/2016/11/gluten-free-crumpets-98679-1.jpeg', false),
                ('must-try', 'Meat Pie from Piefection', 'Rachel', 'https://content.api.news/v3/images/bin/cd2a5c3a62e92895fe85d56222a082fa', false),
                ('must-try', 'Scones with jam and cream', 'Rachel', 'https://images.eatsmarter.com/sites/default/files/styles/max_size/public/scones-with-raspberry-jam-and-clotted-cream-584688.jpg', false),
                ('must-try', 'Custard slice', 'Rachel', 'https://www.wandercooks.com/wp-content/uploads/2021/01/vanilla-slice-recipe-lattice-biscuits-ft-1.jpg', false),
                ('must-try', 'Golden Syrup dumplings', 'Rachel', 'https://whisk-res.cloudinary.com/image/upload/g_auto,g_auto,c_fill,q_60,f_auto,h_600,w_800/v1612026030/v3/user-recipes/hjjvrgda9jwlyx3ozxla.jpg', false),
                ('must-try', 'Dads prawns', 'Rachel', 'https://www.mashed.com/img/gallery/types-of-prawn-and-how-to-eat-them/intro-1657430281.jpg', false),
                ('must-try', 'Fish and Chips', 'Rachel', 'http://takeawaycairns.com/wp-content/uploads/2020/05/rsz_2fish_and_chips_at_dashs_takeaway_cairns.jpg', false),
                ('foodAndBev', 'Salt House', 'Rachel', 'https://i.pinimg.com/originals/02/f6/57/02f6578e7d96d6d835b7fa5c58fd6d5e.jpg', false),
                ('foodAndBev', 'Dundees', 'Rachel', 'https://media-cdn.tripadvisor.com/media/photo-s/12/f8/a2/8d/boardwalk-dinning.jpg', false),
                ('foodAndBev', 'Rattle n Hum', 'Rachel', 'https://www.visitportdouglasdaintree.com/images/_1200x600_crop_center-center_none/Rattle-hum.jpg', false),
                ('foodAndBev', 'Sushi Train', 'Rachel', 'https://www.pedestrian.tv/wp-content/uploads/2019/09/cheese-sushi-train-fb.png?quality=80&resize=1280,720', false),
                ('foodAndBev', 'Thai Coins', 'Rachel', 'https://media-cdn.tripadvisor.com/media/photo-s/03/2f/d9/5e/delicious-whole-fish.jpg', false),
                ('foodAndBev', 'Three Wolves', 'Rachel', 'https://www.tropicnow.com.au/fileadmin/user_upload/articles/2020/October/threewolves.JPG', false),
                ('foodAndBev', 'The Pier bar', 'Rachel', 'https://media-cdn.tripadvisor.com/media/photo-s/07/b0/47/21/the-pier-bar-grill.jpg', false),
                ('foodAndBev', 'Hemingways Bar', 'Rachel', 'https://www.hemingwaysbrewery.com/fileadmin/_processed_/4/3/csm_VCW0819_Fri_night_6_web_14c005c49d.jpg', false),
                ('foodAndBev', 'The Conservatory bar', 'Rachel', 'https://cairnscalendar.com.au/wp-content/uploads/2021/01/The-Conservatory-Bar-2.jpg', false),
                ('foodAndBev', 'Roccos', 'Rachel', 'https://content.api.news/v3/images/bin/0c259d10c2e2e13672f58658dd5f0b33', false);
        `).then(() => {
            console.log('DB seeded, seed.js!')
        }).catch(err => console.log('error seeding DB, seed.js', err))
    }
};