class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :badge
      t.integer :vote_count
      t.references :boot

      t.timestamps null: false
    end
  end
end
