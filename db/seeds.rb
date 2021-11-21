# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

WaldoScreen.create(name: 'test screen', image_url: '1.jpeg')

Score.create(seconds: 30, waldo_screen_id: 1)

Character.create(name: 'Waldo', image_url: 'waldo.png')
Character.create(name: 'Wenda', image_url: 'wenda.png')
Character.create(name: 'Wizard', image_url: 'wiz.png')
Character.create(name: 'Odlaw', image_url: 'odlaw.png')

Position.create(x_pos: 0.1, y_pos: 0.5, character_id: 1, waldo_screen_id: 1)
Position.create(x_pos: 0.2, y_pos: 0.6, character_id: 2, waldo_screen_id: 1)
Position.create(x_pos: 0.3, y_pos: 0.7, character_id: 3, waldo_screen_id: 1)
Position.create(x_pos: 0.4, y_pos: 0.8, character_id: 4, waldo_screen_id: 1)
