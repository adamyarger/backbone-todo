json.array!(@godos) do |godo|
	json.partial!("godos/godo", :godo => godo)

end