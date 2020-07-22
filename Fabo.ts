export class Fabo {
	public recursive(idx: number): number {
		if (idx == 1 || idx == 2) {
			return idx - 1;	
		}

		return this.recursive(idx - 2) + this.recursive(idx - 1);
	}

	public dp(idx: number): number {
		let ref = [];
		ref[0] = 0;
		ref[1] = 1;

		if (idx == 1 || idx == 2) {
			return ref[idx - 1];
		}
		for (let i = 3; i <= idx; i++) {
		  ref[i-1] = ref[i-3] + ref[i-2]
		}
		return ref[idx-1];
	}

	public repeat(idx: number): number {
		if (idx == 1 || idx == 2) {
			return idx - 1;	
		}
		let first = 0;
		let next = 1;
		let current = 1;
		for(let i = 3; i < idx; i++) {
			current = first + next;
			first = next ;
			next = current;
		}
		return current;
	}

}
