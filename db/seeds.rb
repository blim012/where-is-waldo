# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

WaldoScreen.create(name: 'Marketplace', image_url: '1.jpeg')
WaldoScreen.create(name: 'Medieval', image_url: '2.jpeg')
WaldoScreen.create(name: 'Town Square', image_url: '3.jpeg')

Character.create(name: 'Waldo', image_url: 'waldo.png')
Character.create(name: 'Wenda', image_url: 'wenda.png')
Character.create(name: 'Wizard', image_url: 'wiz.png')
Character.create(name: 'Odlaw', image_url: 'odlaw.png')

Score.create(seconds: 30, name: 'bob', waldo_screen_id: 1)
Score.create(seconds: 1, name: 'fast', waldo_screen_id: 1)
Score.create(seconds: 123, name: 'slow', waldo_screen_id: 1)

Score.create(seconds: 20, name: 'bob but better', waldo_screen_id: 2)
Score.create(seconds: 11, name: 'fast-ish', waldo_screen_id: 2)
Score.create(seconds: 1234, name: 'slower', waldo_screen_id: 2)

Score.create(seconds: 30, name: 'bob3', waldo_screen_id: 3)
Score.create(seconds: 5, name: 'quick', waldo_screen_id: 3)
Score.create(seconds: 555, name: 'slug', waldo_screen_id: 3)

Position.create(x_pos: 0.1, y_pos: 0.5, character_id: 1, waldo_screen_id: 1)
Position.create(x_pos: 0.2, y_pos: 0.6, character_id: 2, waldo_screen_id: 1)
Position.create(x_pos: 0.3, y_pos: 0.7, character_id: 3, waldo_screen_id: 1)
Position.create(x_pos: 0.4, y_pos: 0.8, character_id: 4, waldo_screen_id: 1)

Position.create(x_pos: 0.1, y_pos: 0.5, character_id: 1, waldo_screen_id: 2)
Position.create(x_pos: 0.2, y_pos: 0.6, character_id: 2, waldo_screen_id: 2)
Position.create(x_pos: 0.3, y_pos: 0.7, character_id: 3, waldo_screen_id: 2)
Position.create(x_pos: 0.4, y_pos: 0.8, character_id: 4, waldo_screen_id: 2)

Position.create(x_pos: 0.1, y_pos: 0.5, character_id: 1, waldo_screen_id: 3)
Position.create(x_pos: 0.2, y_pos: 0.6, character_id: 2, waldo_screen_id: 3)
Position.create(x_pos: 0.3, y_pos: 0.7, character_id: 3, waldo_screen_id: 3)
Position.create(x_pos: 0.4, y_pos: 0.8, character_id: 4, waldo_screen_id: 3)
