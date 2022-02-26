# Software Requirements

## Vision

- What is the vision of this product?

The vision of our application to a way to bring pets back to the owners. People all around the world lose their pets everyday and sometimes never see them again. If we create an appliation that can within seconds ping hundreds of people around you to helping you find your pet. We would be able to locate lost pets within minutes and get them back safely back to their homes.

- What pain point does this project solve?
  - Get lost pets back
  - Decreases stress

- Why should we care about your product?

You should care if you or someone you know as a pet that can easily get lost if let alone outdoors. Another reason is there might even be a reward. Taking a few minutes to look around your surroundings could benefit you in the long run, and bring a smile back to a distressed pet owner.

## Scope (In/Out)

- IN - What will your product do
  - Describe the individual features that your product will do.
    - Use Socket.io to create rooms to message to specific users about their pets
    - Using REST, the app will be able to post, get, update, and delete their postings
    - Creating a way to reach multiple users and notify them about a pet missing within a certain distance of them
    - Alerting all the users that a pet was seen by them
- OUT - What will your product not do.
  - Describe the individual features that your product will NOT do.
    - Rate their pets
    - Pet play date finder

## Minimum Viable Product vs

- What will your MVP functionality be?
  - Our MVP will be posting alerts to the database, and being able to message that specific user
- What are your stretch goals?
  - Ping people who have the app about a lost pet
  - Create rewards for those find the lost pets
  - Clickalbe "seen near me" button for if your in a car and can not stop but see a lost pet in the app
  - View by cat/dog

### Stretch

- What stretch goals are you going to aim for?
  - Rewards
  - Ping alerts

## Functional Requirements

- List the functionality of your product. This will consist of tasks such as the following:
  - Users will be able to post about their lost animal
  - Update their post
  - See all lost pets
  - Message lost animal owner about their pet
  - Create a comment on another person's post

### Data Flow

>Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

From the momment the user accesses our application, they will be prompted to create an account to link all posting, etc to them. After they have signed up, they will be able to log in, create a posting, comment on a posting, or click "seen near me". If the user has created a posting, they will be able to update their posting, but only admin will be able to delete the posting. The user will be able to send a direct message to that person as well about their animal for questions or answers.

## Non-Functional Requirements

>Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

- Security
  - We are using Auth0 to secure authentication to the site. This will ensure users are the only authorized entrants into their Bucket Lists to review notes, see trip plans, etc. Auth0 is a trusted security measure, so we feel confident that our users will feel secure with our site.
- Scalability
  - We could keep adding information points to our sites, and keep finding APIs that find another few tidbits of data. However, we are going to limit our scope of items to to ensure the users are not overwhelmed by their user experience when visiting our site. We can definitely add many more APIs and endpoints, however, we would like to offer our users a clean, well presented, uncluttered looking site.
