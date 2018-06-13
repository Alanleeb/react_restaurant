50.times do
    Menu.create(
      item: Faker::Food.dish,
      description: Faker::Hipster.sentence,
      price: Faker::Commerce.price.to_f
    )
  end